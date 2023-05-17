import { get } from '../lib/request'

export const getCard = async ({ code, number }) => {
  const response = await get(`/cards/${code}/${number}`)
  const card = response

  return parseCard(card)
}

const parseCard = card => {
  return {
    artist: card.artist,
    imageLarge: card.image_uris.large,
    imageNormal: card.image_uris.normal,
    imageSmall: card.image_uris.small,
    imageUris: {
      large: card.image_uris.large,
      normal: card.image_uris.normal,
      small: card.image_uris.small,
    },
    name: card.name,
    scryfallUri: card.scryfall_uri,
  }
}
