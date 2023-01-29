import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="w-full h-60 bg-base-profile flex items-start justify-center pt-8">
      <img src={logo} alt="" />
    </header>
  );
};
