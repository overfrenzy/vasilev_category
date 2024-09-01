import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICategory } from '../ICategory';

const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await fetch('/categories.json');
  const data = await response.json();
  return data;
};

const findCategoryById = (categories: ICategory[], id: number): ICategory | null => {
  return categories.find((cat) => cat.id === id) || null;
};

const CategoryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<ICategory | null>(null);

  useEffect(() => {
    const loadCategory = async () => {
      if (id) {
        const categories = await fetchCategories();
        const foundCategory = findCategoryById(categories, parseInt(id));
        setCategory(foundCategory);
      }
    };

    loadCategory();
  }, [id]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
};

export default CategoryDetails;
