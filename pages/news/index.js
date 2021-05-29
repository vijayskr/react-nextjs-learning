
import Link from 'next/link';

import { Fragment } from 'react';

function NewsPage () {
    return (
        <Fragment>
        <h1>This is News Page</h1>
        <ul>
            <li>
                <Link href='/news/nextJs'>NextJS</Link>
            </li>
            <li>
                <Link href='/'>Something-Else</Link>
            </li>
        </ul>
        </Fragment>
    );
}

export default NewsPage;