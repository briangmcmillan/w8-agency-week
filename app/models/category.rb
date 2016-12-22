class Category < ApplicationRecord
  has_many :items


  include PgSearch



    pg_search_scope :search_by_category, :associated_against => {
        :category => :name
      }, against: :name



end
