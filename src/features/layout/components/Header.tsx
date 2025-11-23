interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen?: boolean
}

export function Header({ onMenuClick, isMenuOpen = false }: HeaderProps) {
  return (
    <header className="flex flex-row w-full items-center justify-between px-8 py-4 fixed top-0 left-0 right-0 z-1000">
      <a className="max-w-48 w-full" href="/">
        <img src="/assets/images/logo.png" alt="3D Models Generator" className="object-contain" />
      </a>

      <button
        onClick={onMenuClick}
        className="max-w-20 w-full flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 hover:scale-105"
      >
        {isMenuOpen ? <img src="/assets/icons/burger-menu-close.svg" alt="Открыть меню" /> 
        : <img src="/assets/icons/burger-menu.svg" alt="Открыть меню" />}
      </button>
    </header>
  );
}
