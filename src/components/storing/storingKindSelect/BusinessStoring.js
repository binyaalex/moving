import './BusinessStoring.css'
import React from 'react';
import PersonalInfo from '../generalComponents/PersonalInfo';
import ContactUs from '../generalComponents/ContactUs';
import Head from '../../repeats/head/Head';
import MainBtn from '../generalComponents/MainBtn';

function BusinessStoring(props) {
    return (
        <>
            <div className="PageDad">
                <div className="page businessStoring">
                    <Head text='מילוי פרטים' />
                    <div className="add_card_pages rtl">

                        <div className="add_card_area">
                            <div className="add_card_text_area">

                                {/* <div className="add_card_area"> */}
                                <div className="add_card_text_area">
                                    <div className="add_card_name">
                                        <h1 className="add_card_name_h1 whereStoring_h1"> אזור אחסנה </h1>
                                        <select name="" id="" className="select_address_input">
                                            <option selected>בחר</option>
                                            <option value="center">מרכז</option>
                                            <option value="sharon">שרון</option>
                                            <option value="north sharon">צפון השרון</option>
                                            <option value="north">צפון</option>
                                            <option value="shfela">שפלה</option>
                                            <option value="south">דרום</option>
                                            <option value="jerusalem">ירושלים והסביבה</option>
                                        </select>
                                    </div>
                                </div>
                                {/* </div> */}

                                <PersonalInfo header='פרטי לקוח' />
                            </div>

                            <MainBtn text='אישור' link='/callback' />
                            <ContactUs />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BusinessStoring;