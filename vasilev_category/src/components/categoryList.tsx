import React, { useEffect, useState } from 'react';
import { ICategory } from '../ICategory';
import { Link } from 'react-router-dom';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetch('/categories.json')
      .then((response) => response.json())
      .then((data: ICategory[]) => setCategories(data));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
