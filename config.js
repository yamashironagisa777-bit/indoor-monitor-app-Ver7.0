
/* ThingSpeak設定。Supabaseの公開可能キーを設定してください。 */
window.MONITOR_CONFIG = {
  channelId: "3541401",
  readApiKey: "8YCJD14OU78DXBRG",
  refreshMs: 30000,
  historyResults: 100,
  supabaseUrl: "https://xrmyhdtnlfhllfttujfg.supabase.co",
  supabaseAnonKey: "sb_publishable_TfailmHwHMx4Lgq6TIyiEA_DHhCX02-",
  supabaseBucket: "recordings",
  latestAudioPath: "latest.wav",
  audioRefreshMs: 60000,
  // Supabase Edge Function のURLとVAPID公開鍵をセットアップ手順に従って設定
  pushFunctionUrl: "https://xrmyhdtnlfhllfttujfg.supabase.co/functions/v1/indoor-push",
  vapidPublicKey: "PASTE_VAPID_PUBLIC_KEY_HERE"
};
