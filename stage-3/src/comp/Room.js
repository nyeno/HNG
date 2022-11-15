import React from 'react'

import { styled} from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';



const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#A02279',
  },
  '& .MuiRating-iconHover': {
    color: '#A02279',
  },
});

export default function Room({nft}) {
  return (
    <div className='border border-imgBorder rounded-2xl p-4'>
      <div className='relative'>
        <img src={nft.image} alt={nft.name} className="rounded-2xl h-2/3"/>
          <div className='absolute top-4 right-4'>
            <StyledRating
                name="customized-color"
                defaultValue={0}
                max={1}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteIcon fontSize="inherit" sx={{ color: blueGrey[50] }}/>}
          />
          </div>
      </div>
      <section className='flex justify-between mt-3'>
        <div className='space-y-2'>
            <p>{nft.name}</p>
            <p>{nft.distance}</p>
            <StyledRating
              name="customized-color"
              defaultValue={5}
              precision={0.5}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}/>
          </div>
          <div className='space-y-2'>
            <p className='text-right'>{nft.price}</p>
            <p className='text-right'>{nft.available}</p> 
          </div>
      </section>
        
    </div>
  )
}
