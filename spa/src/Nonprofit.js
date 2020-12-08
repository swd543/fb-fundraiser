import React, { Component } from "react";
import { BaseRandom } from "./randomization/BaseRandom";

const options = [
  'Living Goods (community health + more general information)',
  'Sankara Netharaya Home Trust (health-cataract surgery + more general information)',
  'Water for South Sudan (clean water access + more general information)',
  'BRAC USA (global poverty -livelihood support + more general information + cost effectiveness)']

const Random1=<BaseRandom items={options} ratingDescription="Quality rating from Impact Matters"/>
const Random2=<BaseRandom items={options} ratingDescription="Quality rating from Charity Navigator"/>
const Random3=<BaseRandom items={options} showRating={false}/>
const Random4=<BaseRandom items={options} showDescription={false} showRating={false}/>

const randomPages = [Random1, Random2, Random3, Random4]

class Nonprofit extends Component {
  render() {
    return (
      randomPages[Math.floor(Math.random()*10000 % randomPages.length)]
    );
  }
}

export default Nonprofit;
