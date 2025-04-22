import React from 'react'
import { Tabs, TabButton } from '../ui/StyledComponents'
import { CategoryFilterProps } from './CategoryFilter.type'

const categories: { id: string; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'account', label: 'Accounts' },
  { id: 'card', label: 'Cards' },
  { id: 'investment', label: 'Investments' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'loan', label: 'Loans' }
]

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const handleKeyDown = (e: React.KeyboardEvent, category: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelectCategory(category)
    }
  }

  return (
    <Tabs className="mb-8">
      {categories.map((category) => (
        <TabButton
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          onKeyDown={(e) => handleKeyDown(e, category.id)}
          className={selectedCategory === category.id ? 'active' : ''}
          tabIndex={0}
          aria-selected={selectedCategory === category.id}
          role="tab"
        >
          {category.label}
        </TabButton>
      ))}
    </Tabs>
  )
}

export default CategoryFilter
