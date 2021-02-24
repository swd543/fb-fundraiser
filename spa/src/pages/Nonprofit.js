import React, { Component, useEffect, useState } from "react";
import { BaseRandom } from "./BaseRandom";
import { nonprofitSelectPage } from "../TextService.json"

const options = nonprofitSelectPage.options

const Random1 = <BaseRandom items={options} ratingDescription="Quality rating from Impact Matters" />
const Random2 = <BaseRandom items={options} ratingDescription="Quality rating from Charity Navigator" />
const Random3 = <BaseRandom items={options} showRating={false} />
const Random4 = <BaseRandom items={options} showDescription={false} showRating={false} />

const randomPages = [Random1, Random2, Random3, Random4]

export const Nonprofit = () => {
  useEffect(() => {
    FB.getLoginStatus(response => setAuthResponse(response.authResponse))
  })

  const [authResponse, setAuthResponse] = useState(null)

  return (
    randomPages[Math.floor((authResponse ? parseInt(authResponse.userID) : 3296 * 13) % randomPages.length)]
  );
}


export default Nonprofit;
