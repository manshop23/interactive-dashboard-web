export interface IWeather {
  name: string
  type: string
  data: {
    temp: number
    humid: number
    light: number
  }
}

export interface IPM25 {
  name: string
  type: string
  data: {
    pm25: number
  }
}

export interface ITwitter {
  name: string
  type: string
  quote_count: number
  reply_count: number
  retweet_count: number
  favorite_count: number
  favorited: boolean
  retweeted: boolean
  possibly_sensitive?: boolean
  filter_level: string
  lang: string
  data: {
    text: string
  }
}
