import React from 'react';
import './SectionOneHome.sass';

class SectionOneHome extends React.Component {
    render() {
        return (
            <section className='background-image__section-1'>
              <div className='section-1__text-container'>
                <p>
                  Squires Four Pub takes pleasure in providing you with a warm english style pub with a friendly,
                  sociable atmosphere, reasonably priced and tastefully prepared meals, fine drinks and a friendly
                  staff. Our establishment is dedicated to creating an environment where patrons can enjoy conversation,
                  and sports on one of our many televisions. As our guest, we hope you enjoy our pub and feel free to
                  offer any suggestions you may have. </p>
                <p>
                  The Pub now has a NEW room that seats 32 and is great for booking Anniversary parties, staff parties,
                  birthday parties, etc... We also have a small conference room upstairs that seats 8-10 comfortably.
                  This room is a private room, please contact us to reserve your next party, small conference or meeting.
                </p>
                <p>
                  The Pub also does take-out but does not deliver, see our menu.
                </p>
                <p>
                  Must be 19 yrs of age, please be sure to have at least 2 pieces of ID, no ID - no service.
                </p>
              </div>
            </section>
        )
    }
}

export default SectionOneHome;