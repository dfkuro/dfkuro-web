export interface TerminalCommand {
  name: string;
  description: string;
  execute: (args: string[]) => string | string[];
}

export function createTerminalEngine(
  context: {
    profile: { name: string; alias?: string; role: string; shell: string; editor: string; bio: string };
    sections: string[];
    lang: string;
    onSudoHire: () => void;
  }
) {
  const isEs = context.lang === 'es';
  const t = (en: string, es: string) => (isEs ? es : en);

  const commands = new Map<string, TerminalCommand>();

  commands.set('help', {
    name: 'help',
    description: t('Show available commands', 'Mostrar comandos disponibles'),
    execute: () => {
      const list = Array.from(commands.values()).map(
        (cmd) => `  <span class="term-cmd">${cmd.name}</span>  ${cmd.description}`
      );
      return [t('Available commands:', 'Comandos disponibles:'), ...list];
    },
  });

  commands.set('whoami', {
    name: 'whoami',
    description: t('Display profile information', 'Mostrar información del perfil'),
    execute: () => [
      `<span class="term-label">${t('Name:', 'Nombre:')}</span>    ${context.profile.name}${context.profile.alias ? ` <span class="term-art">(${context.profile.alias})</span>` : ''}`,
      `<span class="term-label">${t('Role:', 'Rol:')}</span>    ${context.profile.role}`,
      `<span class="term-label">${t('Shell:', 'Shell:')}</span>   ${context.profile.shell}`,
      `<span class="term-label">${t('Editor:', 'Editor:')}</span>  ${context.profile.editor}`,
      '',
      context.profile.bio,
    ],
  });

  commands.set('ls', {
    name: 'ls',
    description: t('List portfolio sections', 'Enumerar secciones del portafolio'),
    execute: () => [t('Sections:', 'Secciones:'), ...context.sections.map((s) => `  <span class="term-dir">${s}/</span>`)],
  });

  commands.set('neofetch', {
    name: 'neofetch',
    description: t('Display system info', 'Mostrar información del sistema'),
    execute: () => {
      const ascii = [
        '    ___     ',
        '   /   \\    ',
        '  /  |  \\   ',
        ' /   .   \\  ',
        '/__________\\ ',
      ];
      const info = [
        `${t('User:', 'Usuario:')}    ${context.profile.name}${context.profile.alias ? ` (${context.profile.alias})` : ''}`,
        `OS:        ${t('Debian (WSL)', 'Debian (WSL)')}`,
        `${t('Shell:', 'Shell:')}     ${context.profile.shell}`,
        `${t('Editor:', 'Editor:')}    ${context.profile.editor}`,
        `WM:        i3wm`,
        `${t('Terminal:', 'Terminal:')}  alacritty`,
        `${t('Language:', 'Lenguaje:')}  TypeScript`,
        `Runtime:   Bun`,
      ];
      const lines: string[] = [];
      for (let i = 0; i < Math.max(ascii.length, info.length); i++) {
        const art = ascii[i] || '             ';
        const line = info[i] || '';
        lines.push(`<span class="term-art">${art}</span>  ${line}`);
      }
      return lines;
    },
  });

  commands.set('clear', {
    name: 'clear',
    description: t('Clear terminal screen', 'Limpiar la pantalla de la terminal'),
    execute: () => '___CLEAR___',
  });

  commands.set('exit', {
    name: 'exit',
    description: t('Close terminal', 'Cerrar la terminal'),
    execute: () => '___EXIT___',
  });

  commands.set('sudo', {
    name: 'sudo',
    description: t('Superuser commands', 'Comandos de superusuario'),
    execute: (args) => {
      if (args[0] === 'hire' && args[1]?.toLowerCase() === 'dfkuro') {
        context.onSudoHire();
        return [
          `<span class="term-warn">[sudo] ${t('password for visitor:', 'contraseña para visitante:')} </span> ********`,
          t('Transmitting application...', 'Enviando solicitud...'),
          `<span class="term-success">${t('Done. Application sent to izmirreffi@gmail.com', 'Hecho. Solicitud enviada a izmirreffi@gmail.com')}</span>`,
          '',
          t('You have unlocked a secret.', 'Has desbloqueado un secreto.'),
        ];
      }
      return [t('sudo: command not found or insufficient privileges.', 'sudo: comando no encontrado o privilegios insuficientes.')];
    },
  });

  return {
    execute: (input: string): { output: string | string[]; type: 'output' | 'clear' | 'exit' } => {
      const trimmed = input.trim();
      if (!trimmed) return { output: '', type: 'output' };

      const parts = trimmed.split(/\s+/);
      const cmdName = parts[0]?.toLowerCase() || '';
      const args = parts.slice(1);

      const cmd = commands.get(cmdName);
      if (!cmd) {
        return { output: t(`command not found: ${cmdName}`, `comando no encontrado: ${cmdName}`), type: 'output' };
      }

      const result = cmd.execute(args);
      if (result === '___CLEAR___') return { output: '', type: 'clear' };
      if (result === '___EXIT___') return { output: '', type: 'exit' };

      return { output: result, type: 'output' };
    },
    commands: Array.from(commands.keys()),
  };
}
