import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { CategoryList } from './CategoryList'


export default class Category extends Component {



  render() {
    const { match } = this.props;
    let rootPath = '';
    const foundedCategory = CategoryList.find(category => category.path === match?.path);

    if (match) {
      rootPath = match.path.split('/')[1];
    }
      console.log(rootPath)
    return (
      <div>
        <div className="ui tabular menu">
          
          {CategoryList.filter(category => category.categoryType === rootPath).map(category => (
            <Link to={category.path} className="item"
              key={`CATEGORY_LINK_${category.categoryId}`}>
              {category.categoryName}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="ui header">{foundedCategory?.categoryName}</h2>
        </div>
      </div>
    )
  }
}


