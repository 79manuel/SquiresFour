import React from 'react';
import './LiquorStore.sass';

class LiquorStore extends React.Component {
    render() {
        return <main>
            <section className='liquor-store-background'>
                <h1>Liquor Store</h1>
                <div className='store__text-container'>
                    <p>
                        NEWLY RENOVATED and EXPANDED....twice the original size inside. That means almost TWICE the
                        amount of selection for our customers. We also feature tastings almost every Friday afternoon!
                    </p>
                    <p>
                        We carry a wide range of liquor, cold beer, cider, coolers and wines from countries around the
                        globe. We are constantly adding new products so visit us regularly to see what's new in store.
                    </p>
                    <p>
                        Squires Four Cold Beer & Wine Store accepts Debit, Visa, MasterCard, American Express and Cash.
                        If you are under 30 years of age please have 2 pieces of ID.
                    </p>
                </div>
            </section>
        </main>
    }
}

export default LiquorStore;