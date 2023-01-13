import moment from "moment"
import { IFilter } from "../models/filter"
import { IGameItem } from "../models/gameItem"

//check first symbol in game price to realize is it free or have cost
const firstLetterIsString = (str: string) => {
  const firstLatter = str.trim().slice(0, 1)
  const convertedToNumber = Number(firstLatter)
  const isString = isNaN(convertedToNumber)
  return isString
}

//convert price to number for sorting
const strPriceToNumber = (str: string) =>
  firstLetterIsString(str)
    ? 0
    : Number(str.trim().split("€")[0].replace(",", "."))

//convert published date to number for sorting
export const dateToNumber = (date: string) => {
  if (!date) return 0
  //date format: 14 Nov, 2016
  //so, delete ','
  const [day, , year] = date.trim().replace(",", "").split(" ")
  //get month number
  const monthNumber = moment(date).month()
  //convert month to MM
  const monthValue = monthNumber < 10 ? `0${monthNumber}` : monthNumber
  //convert day to MM
  const dayValue = Number(day) < 10 ? `0${day}` : day
  //join YYYY + MM + DD
  const dateStr = year + monthValue + dayValue
  //convert to number for sorting
  const dateNumber = Number(dateStr)
  return dateNumber
}

export const sortGamesBy = (games: IGameItem[], filter: IFilter) => {
  //converting function, convert price or date (depends on filter)
  const conventor =
    filter.filterBy === "price" ? strPriceToNumber : dateToNumber
  const prop = filter.filterBy === "price" ? "price" : "released"

  const filteredGames = [...games].sort((a, b) => {
    const aProp = conventor(a[prop])
    const bProp = conventor(b[prop])

    if (aProp < bProp) {
      return filter.order === "lover-to-bigger" ? -1 : 1
    }
    if (aProp > bProp) {
      return filter.order === "lover-to-bigger" ? 1 : -1
    }
    return 0
  })

  return filteredGames
}
