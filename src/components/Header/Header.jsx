import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import s from './Header.module.scss'

const Header = (props) => {
    return (
        <section className={s.section}>
            <div className="container">
                <div className={s.wrap}>
                    <Link className={`${s.logo} text--lg`} to="/">Food market</Link>
                    <div className={s.nav__list}>
                        <Link className={s.nav__item} to="/cart">
                            <Button>{`Cart ${props.commonAmount == 0 ? "" : `(${props.commonAmount})`}`}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = ({ cart }) => {
    return {
        ...cart
    }
}

export default connect(mapStateToProps, null)(Header)