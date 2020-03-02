import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "shoes",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 1,
          linkUrl: "shop/shoes"
        },
        {
          title: "clothing",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/clothing"
        },
        {
          title: "accessories",
          imageUrl:
            "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          id: 3,
          linkUrl: "shop/accessories"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl:
            "https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
