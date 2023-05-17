import { useState, useEffect } from 'react'
import {
  CardMedia,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material'

import {
  Info as InfoIcon,
} from '@mui/icons-material'

import { getCard } from './data/cards'

function CardTile({ owned, code, number, imageSize = 'normal' }: any) {
  const [card, setCard] = useState({} as any)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCard({ code, number })
      .then(setCard)
      .then(() => setLoading(false))
  }, [])

  const {
    artist,
    name,
    imageUris,
  } = card

  let imgURL = '/placeholders/mtg-card-back.jpg'
  if (imageSize && !loading) {
    imgURL = imageUris?.[imageSize]
  }

  const ownedStyles = owned ? {} : { opacity: 0.4 }

  return (
    <ImageListItem key={`${code}`}>
      <CardMedia
        component="img"
        image={imgURL}
        alt={`${name}. Illustration by ${artist}.`}
        loading="lazy"
        sx={{
          ...ownedStyles,
        }}
      />

      <ImageListItemBar
        title={name}
        subtitle={`Illustration by ${artist}`}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`Information about ${name}. Illustration by ${artist}.`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  )
}

export default CardTile
