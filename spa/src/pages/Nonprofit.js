import React, { Component } from "react";
import { BaseRandom } from "./BaseRandom";
import { nonprofitSelectPage } from "../TextService.json"

const options = nonprofitSelectPage.options

const Random1 = <BaseRandom items={options} ratingDescription="Quality rating from Impact Matters" />
const Random2 = <BaseRandom items={options} ratingDescription="Quality rating from Charity Navigator" />
const Random3 = <BaseRandom items={options} showRating={false} />
const Random4 = <BaseRandom items={options} showDescription={false} showRating={false} />

const randomPages = [Random1, Random2, Random3, Random4]

class Nonprofit extends Component {
  render() {
    return (
      randomPages[Math.floor((Math.random() * 3296) % randomPages.length)]
    );
  }
}

export default Nonprofit;
