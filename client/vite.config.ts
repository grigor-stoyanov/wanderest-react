import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '')
  return {
    root:path.resolve(__dirname,''),
    build:{
      outDir: path.resolve(__dirname,'build')
    },
    server:{
      port: parseInt(env.VITE_CLIENT_PORT)
    },
    plugins: [react()],
    css:{
      devSourcemap:true
    }
  }
})
