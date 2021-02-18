import React from 'react';
import Link from 'next/link';
import {WithRouterProps} from 'next/dist/client/with-router';

import {withRouter} from 'next/router';

interface LinkProps extends WithRouterProps{
  href: string;
  title: string;
}

const ActiveLink: React.FunctionComponent<LinkProps> = ({
  router,
  title,
  href,
  ...props
}) =>(
  <li className={`/${router.pathname.split('/')[1]}` === href ? 'is-current': ''}>
    <Link href={href} {...props}>
      <a href="">{title}</a>
    </Link>
  </li>
)
export default withRouter(ActiveLink);