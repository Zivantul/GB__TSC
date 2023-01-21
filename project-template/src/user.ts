import { renderBlock } from './lib.js'

export function renderUserBlock(userName: string, avatarSrc: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  let hasFavoriteItems = true;

  if (favoriteItemsAmount < 1) {
    hasFavoriteItems = false;
  }

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarSrc}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
