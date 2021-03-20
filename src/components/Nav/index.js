import React from 'react';

const Nav = () => {

    const categories = [
        {
          name: "commercial",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];

      function categorySelected(name) {
        console.log(`${name} clicked`)
      }

    return (
    <header className="d-inline">
        <h2 className="d-flex" style={{width: "25vw", margin: "0"}}>
          <a href="/">
            <span role="img" aria-label="camera"> 📸</span> Oh Snap!
          </a>
        </h2>
        <nav className="w-50 d-flex" style={{width: "75vw", margin: "0"}}>
          <ul className="flex-row ">
            <li className="mx-2">
              <a href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li>
             {categories.map((category) => (
              <li
                className="mx-1"
                key={category.name}
              >
                <span onClick={() => categorySelected(category.name)}>
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
    </header>
    )
}

export default Nav;
