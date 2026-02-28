const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── API PROXY — keeps your key safe on the server ──────────────────────
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured. Please set ANTHROPIC_API_KEY in your Render environment variables.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: req.body.system,
        messages: req.body.messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'API error' });
    }

    res.json({ text: data.content?.[0]?.text || '' });

  } catch (err) {
    console.error('API proxy error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// ── Health check ──────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'CONVERSIQ is running' });
});

// ── Fallback — serve simulator for all routes ─────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'simulator.html'));
});

app.listen(PORT, () => {
  console.log(`✅ CONVERSIQ server running on port ${PORT}`);
});
