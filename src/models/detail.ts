export interface Developer {
  link: string
  name: string
}

export interface Publisher {
  link: string
  name: string
}

export interface Tag {
  url: string
  name: string
}

export interface AllReviews {
  summary: string
  reviewCount: string
  ratingValue: string
  bestRating: string
  worstRating: string
}

export interface IDetail {
  imgUrl: string
  title: string
  developer: Developer
  publisher: Publisher
  released: string
  description: string
  tags: Tag[]
  allReviews: AllReviews
  price: string
  DLCs: any[]
}
