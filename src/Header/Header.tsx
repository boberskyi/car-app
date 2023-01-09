import sHeader from './header.module.css';

export const Header = () => {
  return (
    <header className={sHeader.header}>
      <nav className={sHeader.menu}>
        <a className={sHeader.link} href="/cars">My cars</a>
        <a className={sHeader.link} href="/settings">Settings</a>
      </nav>
    </header>
  )
}