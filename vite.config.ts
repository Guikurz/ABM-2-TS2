import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente (do .env ou do sistema)
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Substitui "process.env.GEMINI_API_KEY" pelo valor real da variável GEMINI_API_KEY configurada na hospedagem
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    }
  }
})