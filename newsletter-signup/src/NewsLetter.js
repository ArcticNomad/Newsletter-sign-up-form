import React from "react";
export default function NewsLetter() {
    return (
        <article className="NewsLetter">

            <div className="main-section">
                <div className="insideMain">
                    <h1 className="message-1">Stay Updated!</h1>
                    <div className="message-2">Join 60,000+ Product Managers Receiving Monthly Updates On :</div>
                    <div className="promo">
                        <ul className="promoLists">
                            <li className="promo-item-1"><img src={`${process.env.PUBLIC_URL}/icon-success.svg`} alt="jhhj"/> Product Discovery and Building What Matters</li>
                            <li className="promo-item-1"><img src={`${process.env.PUBLIC_URL}/icon-success.svg`} id="listImg" /> Ensuring Updates are a Success</li>
                            <li className="promo-item-1"><img src={`${process.env.PUBLIC_URL}/icon-success.svg`} id="listImg" /> And Much More!</li>
                        </ul>
                    </div>

                    <form>
                        <label htmlFor="email" id="label">Email Address</label>
                        <br/>
                        <input type="email" id="email" name="email" placeholder="       email@company.com" required/>
                        <br/>
                        <button type="submit" id="submit">Subscribe To Monthly NewsLetter</button>

                    </form>

                </div>

            </div>

            <div className="image">
                <img src={`${process.env.PUBLIC_URL}/illustration-sign-up-desktop.svg`} alt="Sign-Up Illustration"/>

            </div>
        </article>
    )
}

