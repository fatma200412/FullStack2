import UserSurname from "../UserSurname";

function Header({ name }) {
  //   console.log(name);

  console.log("header render olundu");

  return (
    <div>
      <h4>This is header</h4>
      <p>{name}</p>

      <UserSurname />
    </div>
  );
}

export default Header;
