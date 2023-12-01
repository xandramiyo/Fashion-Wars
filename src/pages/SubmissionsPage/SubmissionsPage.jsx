import './SubmissionsPage.css'
import placeholder from '../../images/youknow.png'
import icon from '../../images/logo.png'
import { useState } from 'react'

export default function SubmissionsPage() {
    
    const [checked, setChecked] = useState(false)

    function handleChange() {
        console.log("check")
    }

    return (
        <>
            {/* refactor code so that page title is autofilled by path? */}
            <h1>Lookbook</h1>

            <main className="lb-ctr">
                    <div className="filter-ctr">
                        <div className="gender">
                            <h4>Gender</h4>
                            <div className="icon-ctr">
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="race">
                            <h4>Race</h4>
                            <div className="icon-ctr">
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="weight">
                            <h4>Armor Weight</h4>
                            <div className="icon-ctr">
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                                <div>
                                    <img src={icon} className="filter-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="checkbox">
                        {/* toggle */}
                            <label>
                                <input type="checkbox" checked={checked} onChange={handleChange} /> Hide Outifts
                            </label>
                            <label>
                                <input type="checkbox" checked={checked} onChange={handleChange} /> Hide Gem Store
                            </label>
                        </div>
                        <div className="sort">
                            <h4>sort by:</h4>
                        </div>
                    </div>
                    <div className="lb-main">
                        <div className="card">
                            <img src={placeholder} className="card-img"/>
                        </div>
                        <div className="card">
                            <img src={placeholder} className="card-img"/>
                        </div>
                        <div className="card">
                            <img src={placeholder} className="card-img"/>
                        </div>
                        <div className="card">
                            <img src={placeholder} className="card-img"/>
                        </div>
                        <div className="card">
                            <img src={placeholder} className="card-img"/>
                        </div>
                        <div className="card">
                            <img src={placeholder} className="card-img"/>
                        </div>
                        <div className="card">
                            <img src={placeholder} className="card-img"/>
                        </div>
                    </div>
            </main>
        </>
    )
}