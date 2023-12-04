import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <nav>
        <header className="uppercase font-bold text-base-content">
          Mapa do site
        </header>
        <Link href="/">Início</Link>
        <Link href="/#features">funções</Link>
        <Link href="/#about">Sobre</Link>
        <Link href="support">Suporte</Link>
      </nav>
      <nav>
        <header className="uppercase font-bold text-base-content">
          Aplicação
        </header>
        <Link href="https://app.invetu.com">Acessar</Link>
      </nav>
      <nav>
        <header className="uppercase font-bold text-base-content">
          Social
        </header>
        <div className="grid grid-flow-col gap-4">
          <div className="tooltip" data-tip="Nos siga no Twitter">
            <Link
              aria-label="Perfil da Invetu no Twitter"
              href="https://twitter.com/invetuapp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
          </div>
          <div className="tooltip" data-tip="Nos siga no Nostr">
            <Link
              aria-label="Perfil da Invetu no Nostr"
              href="https://snort.social/npub1dzlcz4ghpaqpuaqm0hxcna243us34v82e4sjsnnp3z8qx72ltk6sdkn8qa"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 186 185"
                className="fill-current"
              >
                <path d="M93 0.109245C41.9345 0.109245 0.531006 41.4984 0.531006 92.5462C0.531006 143.594 41.9345 184.983 93 184.983C144.066 184.983 185.469 143.594 185.469 92.5462C185.469 41.4984 144.066 0.109245 93 0.109245ZM146.104 71.3234C142.197 77.8129 134.234 82.2272 133.498 82.6045C132.007 83.3968 131.46 84.5476 131.554 86.2643C131.648 87.981 131.233 96.4889 126.044 100.243C123.383 102.167 112.645 104.657 107.72 105.487C105.191 105.921 104.606 106.695 103.209 107.525C101.322 108.694 94.6229 117.976 93.4907 120.032C93.6416 120.013 114.608 113.505 115.551 113.354C118.042 112.977 119.929 113.694 121.156 115.505C122.326 117.24 123.477 118.995 124.628 120.749C125.043 121.371 125.44 122.013 125.836 122.654L126.251 123.315C126.402 123.56 126.61 123.843 126.704 124.22C126.78 124.484 126.949 125.371 126.44 125.899C125.968 126.389 125.157 126.389 124.723 126.276C124.307 126.163 123.685 125.918 123.175 125.503L122.477 124.918C121.93 124.446 120.892 124.22 120.08 124.258C119.137 124.295 117.891 123.994 117.287 123.616C116.117 122.862 115.815 120.975 115.815 120.956C115.664 120.334 115.211 120.164 114.796 120.164C114.041 120.145 113.456 120.372 112.853 120.541C110.097 121.371 107.361 122.22 104.606 123.088L100.662 124.314C98.718 124.918 96.7743 125.522 94.8494 126.163C94.321 126.333 93.8115 126.597 93.2642 126.88C93.0378 126.993 92.8113 127.106 92.5849 127.22C92.3584 127.333 92.1131 127.465 91.8866 127.597C91.3771 127.88 90.8298 128.182 90.226 128.351C88.2633 128.936 86.5461 128.087 85.7346 126.125C85.2062 124.861 85.678 122.352 85.9611 121.617C87.735 117.014 93.5095 108.336 93.5095 108.279C93.4152 108.242 87.1122 110.77 86.0743 111.562C83.2247 113.731 76.5443 118.862 76.45 119.353C76.0159 121.636 74.6006 123.352 72.4304 124.201C70.8641 124.805 69.9205 126.05 68.9958 127.257C68.9958 127.257 52.257 150.31 51.1248 151.555C50.7851 151.932 47.6525 155.215 46.8221 156.743C46.6334 157.12 45.9163 158.629 45.7276 159.007C45.5766 159.308 45.2369 160.12 43.9537 160.063C42.6705 160.006 42.6327 158.214 42.5761 157.441C42.444 155.535 42.8592 153.668 43.8593 151.706C43.9537 151.517 45.086 149.801 44.6708 148.423C44.2934 147.216 43.9348 145.348 44.501 144.405C45.3879 142.915 46.9542 142.858 49.0489 142.519C50.502 142.274 51.5588 141.557 52.5779 140.066C54.7292 136.935 62.8249 125.446 64.6554 122.786C65.1461 122.088 65.5235 121.183 65.6934 120.296C66.2218 117.617 67.8447 115.75 70.6754 114.599C71.2792 114.354 82.5454 104.94 82.5454 103.733C82.5454 102.865 81.3187 102.394 80.3752 102.129C80.2431 102.092 73.1664 100.262 69.9394 98.7904C68.1844 97.9981 66.8634 97.3001 65.2971 96.1682C63.1646 94.6025 58.8997 95.3571 58.277 95.4514C55.2576 95.8853 53.0119 97.2435 50.4643 98.9602C50.0114 99.2809 47.6902 100.111 46.5202 99.4507C44.2368 98.149 39.217 95.8098 37.3676 92.999C36.5184 91.6973 36.6317 89.5845 37.2355 87.2452C39.1793 81.8122 42.0477 79.3787 47.3505 77.9072C51.1248 76.6056 58.7299 76.3226 62.3909 76.0396C62.6362 75.9642 70.7508 75.7755 76.45 72.8515C80.2431 70.9084 91.5092 63.4191 107.72 63.9285C114.268 64.136 126.647 70.5311 131.422 70.7198C136.291 70.9273 138.725 70.3802 141.537 67.475C142.329 66.645 145.707 59.3632 142.518 55.3828C141.329 53.9113 140.103 52.5908 138.687 51.3835C136.781 49.7611 134.8 48.2142 133.083 46.3843C129.289 42.3661 128.119 36.8765 129.912 32.5942C131.063 29.5948 133.479 28.2931 136.97 28.9722C139.423 29.4438 141.216 31.651 142.971 32.8206C143.952 33.4809 145.594 33.8582 146.67 34.1223C148.029 34.443 149.048 35.4805 148.991 36.1785C148.934 36.8765 147.142 37.4802 145.424 37.3481C143.386 37.2161 139.895 37.1972 137.8 37.8952C136.404 38.4046 135.781 39.9515 136.196 41.4795C136.536 42.7246 139.197 44.9506 140.197 45.7807C142.197 47.4219 144.33 48.9122 145.99 50.9684C147.859 53.3077 148.84 55.9676 149.142 58.9105C149.595 63.4191 148.406 67.475 146.104 71.3234Z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
}
