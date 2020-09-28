import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Snsbar = (props)=> {
  return (
    <div>
      <a href="https://twitter.com/nomuoyuto" ><TwitterIcon /></a>
      <a href="https://www.instagram.com/yuto_nomura000/" ><InstagramIcon /></a>
      <a href="https://www.facebook.com/profile.php?id=100055580342679" ><FacebookIcon /></a>
    </div>
  )
}

export default Snsbar