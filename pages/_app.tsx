import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"
import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import type { FC } from "react"
import React, { useMemo, useEffect, useState } from "react"
import RootLayout from "@/components/layout"
import { siteConfig } from "@/config/site"
// import { supabase } from '../utils/supabase'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pqpayyxkvsfoddpbdwyq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcGF5eXhrdnNmb2RkcGJkd3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjcxMDUsImV4cCI6MjAyOTk0MzEwNX0.yKp-tNgNR0UirxrqHT0TmPQBoRUaVhzf1rTef86ukRY"
const supabase = createClient(supabaseUrl, supabaseKey)



// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css")
require("../styles/globals.css")

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  )

  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      
      let { data: wonka, error } = await supabase
      .from('wonka')
      .select('*')

      console.log(wonka)
    }

    getTodos()
  }, [])



  return (
    <>
      <DefaultSeo
        title={siteConfig.name}
        openGraph={{
          type: "website",
          locale: "en_EN",
          description: siteConfig.description,
          site_name: siteConfig.name,
          title: siteConfig.name,
        }}
        description={siteConfig.description}
      />

      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
