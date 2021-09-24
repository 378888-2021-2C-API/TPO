import * as React from "react";
import {
  useParams
} from "react-router-dom";

export const articules = [
    {
      url:
        'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
      title: 'Snorkeling',
      body:'',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
      title: 'Massage',
      body:'',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
      title: 'Hiking',
      body:'',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
      title: 'Tour',
      body:'',
      width: '40%',
    },
  ];

export default function Articules(props) {
    let { id } = useParams();
    var articule = React.useState(articules[id ?? 0]);

    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHeroLayout backgroundClassName={articule.url}>
            <Typography color="inherit" align="center" variant="h2" marked="center">
                {articule.title}
            </Typography>
            </ProductHeroLayout>
            <Typography variant="subtitle1" className={classes.link}>
                {articule.body}
            </Typography>
            <AppFooter />
        </React.Fragment>
      );
}
