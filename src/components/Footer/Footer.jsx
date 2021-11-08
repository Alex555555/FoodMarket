import React from 'react'
import s from './Footer.module.scss'

const Footer = (props) => {
    return (
        <section className={s.section}>
            <div className="container">
                <span className={`text--md ${s.heading}`}>Food market 2021-2021</span>
            </div>
        </section>
    )
}

export default Footer