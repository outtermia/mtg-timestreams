import { useState, useEffect } from 'react'
import {
  CardMedia,
  ImageListItem,
} from '@mui/material'

import { getCard } from 'data/cards'

function CardTile({ owned, code, number, imageSize = 'normal' }: any) {
  const [card, setCard] = useState({} as any)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCard({ code, number })
      .then(setCard)
      .then(() => setLoading(false))
  }, [code, number])

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
    </ImageListItem>
  )
}

export default CardTile
