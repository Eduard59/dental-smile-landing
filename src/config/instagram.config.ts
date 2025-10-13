// Instagram Feed Configuration
// Изменяйте эти параметры для настройки Instagram блока

export const instagramConfig = {
  // Включить/выключить блок Instagram
  enabled: true,

  // Настройки контейнера
  container: {
    height: '630px',
    heightMobile: '400px',
    borderRadius: '16px',
  },

  // Настройки iframe
  iframe: {
    height: '650px',
    scale: 1.6,
    topOffset: '0px',
  },

  // Настройки рядов (горизонтальное смещение)
  rows: {
    row1: {
      marginLeft: '0px',      // Центр
    },
    row2: {
      marginLeft: '205px',    // Вправо
    },
    row3: {
      marginLeft: '205px',    // Вправо
    },
  },

  // Instagram Reels URLs
  reels: {
    row1: [
      'https://www.instagram.com/reel/DPO94lcjFlK/',
      'https://www.instagram.com/reel/DPotzeEDLnZ/',
      'https://www.instagram.com/reel/DPg_avfle4B/',
    ],
    row2: [
      'https://www.instagram.com/reel/DPcsvrfEVgX/',
      'https://www.instagram.com/reel/DPUN7aIAXZm/',
      'https://www.instagram.com/reel/DPRbyt3gnbF/',
    ],
    row3: [
      'https://www.instagram.com/reel/DPO94lcjFlK/',
      'https://www.instagram.com/reel/DPotzeEDLnZ/',
      'https://www.instagram.com/reel/DPg_avfle4B/',
    ],
  },

  // Заголовок секции
  title: 'Follow Our Journey',
  subtitle: 'See daily smile transformations and patient stories on Instagram',
};
