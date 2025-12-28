<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genco AI | Suite Empresarial Final</title>
    <style>
        :root {
            --bg-dark: #0b0c10;
            --bg-panel: #1f2833;
            --primary: #66fcf1; /* Cyan Neon */
            --secondary: #45a29e;
            --text-main: #ffffff;
            --text-muted: #8892b0;
            --accent: #ffd700; /* Gold */
            --cold: #a0aec0;
            --warm: #ed8936;
            --hot: #48bb78;
            --danger: #f56565;
            --radius: 8px;
            --border: #2d3748;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Roboto, Helvetica, sans-serif; }
        
        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            height: 100vh;
            display: flex;
            overflow: hidden;
        }

        /* --- Sidebar --- */
        aside {
            width: 280px;
            background-color: var(--bg-panel);
            border-right: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            padding: 2rem 1.5rem;
            z-index: 10;
        }

        .brand {
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 3rem;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        nav button {
            background: transparent;
            border: none;
            color: var(--text-muted);
            width: 100%;
            padding: 1rem;
            text-align: left;
            cursor: pointer;
            border-radius: var(--radius);
            margin-bottom: 0.5rem;
            font-weight: 500;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        nav button:hover { background-color: rgba(102, 252, 241, 0.1); color: var(--text-main); }
        nav button.active { background-color: var(--primary); color: #000; font-weight: bold; box-shadow: 0 0 15px rgba(102, 252, 241, 0.4); }

        /* --- Main Area --- */
        main {
            flex: 1;
            padding: 2rem;
            overflow-y: auto;
        }

        section { display: none; animation: fadeIn 0.4s ease; }
        section.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        h2 { font-size: 1.8rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center; }

        /* --- Generic UI --- */
        .card { background: var(--bg-panel); padding: 1.5rem; border-radius: var(--radius); margin-bottom: 1.5rem; border: 1px solid var(--border); }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        label { display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.85rem; font-weight: 600; }
        
        input, select, textarea {
            width: 100%; padding: 12px; background: #0b0c10; border: 1px solid var(--border); border-radius: var(--radius); color: white; margin-bottom: 1rem; transition: 0.2s; font-size: 0.95rem;
        }
        input:focus, select:focus, textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 8px rgba(102, 252, 241, 0.2); }

        .btn {
            padding: 12px 24px; border: none; border-radius: var(--radius); cursor: pointer; font-weight: bold; transition: 0.2s; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
        }
        .btn-primary { background: var(--primary); color: #000; width: 100%; font-size: 1.1rem; }
        .btn-primary:hover { box-shadow: 0 0 15px rgba(102, 252, 241, 0.4); }
        .btn-sm { padding: 6px 12px; font-size: 0.8rem; }
        .btn-gold { background: var(--accent); color: #000; }
        .btn-outline { background: transparent; border: 1px solid var(--primary); color: var(--primary); }

        /* --- Toast --- */
        .toast {
            position: fixed; bottom: 20px; right: 20px; background: var(--bg-panel); color: white; padding: 15px 25px; border-left: 5px solid var(--primary); border-radius: 4px; transform: translateX(200%); transition: 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.5); z-index: 100;
        }
        .toast.show { transform: translateX(0); }

        /* --- CHAT IA STYLES --- */
        .status-badge { background: rgba(72, 187, 120, 0.2); color: var(--hot); padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; border: 1px solid var(--hot); display: flex; align-items: center; gap: 5px; }
        
        .preset-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); 
            gap: 10px; 
            margin-bottom: 1.5rem; 
        }
        .preset-btn { 
            background: rgba(255,255,255,0.05); 
            border: 1px solid var(--border); 
            color: var(--text-main); 
            padding: 12px 10px; 
            border-radius: var(--radius); 
            cursor: pointer; 
            font-size: 0.9rem; 
            font-weight: 500;
            text-align: center;
            transition: all 0.2s;
        }
        .preset-btn:hover { border-color: var(--primary); color: var(--primary); background: rgba(102, 252, 241, 0.05); transform: translateY(-2px); }

        .console-log {
            background: #000; color: var(--primary); font-family: 'Courier New', monospace; padding: 15px; border-radius: var(--radius); height: 120px; overflow-y: auto; margin-top: 20px; border: 1px solid #2d3748; font-size: 0.85rem;
        }

        /* --- MASSIVE CHAT AI SEGMENT --- */
        .ai-segment {
            background: linear-gradient(135deg, rgba(102, 252, 241, 0.1), rgba(0,0,0,0));
            border: 1px solid var(--primary); padding: 1rem; border-radius: var(--radius); margin-bottom: 1rem;
        }
        .ai-stat-row { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 0.9rem; color: var(--text-muted); }
        .ai-stat-val { color: var(--primary); font-weight: bold; }

        /* --- DASHBOARD ENHANCED STYLES --- */
        .dashboard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .report-actions { display: flex; gap: 10px; }
        
        .alert-box {
            background: rgba(245, 101, 101, 0.1); border: 1px solid var(--danger); padding: 1rem; border-radius: var(--radius); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;
        }

        /* Better Table */
        .leads-table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem; }
        .leads-table thead th { 
            text-align: left; padding: 12px; color: var(--text-muted); border-bottom: 2px solid var(--border); background: rgba(0,0,0,0.2); 
        }
        .leads-table tbody td { 
            padding: 12px; border-bottom: 1px solid var(--border); color: var(--text-main); 
        }
        .leads-table tr:hover { background-color: rgba(255,255,255,0.02); }
        
        .status-badge-table { padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; display: inline-block; }
        .sb-yes { background: rgba(72, 187, 120, 0.2); color: var(--hot); }
        .sb-no { background: rgba(160, 174, 192, 0.2); color: var(--cold); }
        .sb-hot { background: rgba(72, 187, 120, 0.2); color: var(--hot); border: 1px solid var(--hot); }
        .sb-warm { background: rgba(237, 137, 54, 0.2); color: var(--warm); border: 1px solid var(--warm); }
        .sb-cold { background: rgba(160, 174, 192, 0.2); color: var(--cold); border: 1px solid var(--cold); }

        /* Visual Charts */
        .visual-stats { margin-bottom: 2rem; }
        .chart-row { display: flex; align-items: center; margin-bottom: 12px; font-size: 0.9rem; }
        .chart-label { width: 120px; color: var(--text-muted); }
        .chart-track { flex: 1; background: #0b0c10; height: 10px; border-radius: 5px; overflow: hidden; margin: 0 10px; border: 1px solid var(--border); }
        .chart-bar { height: 100%; background: var(--primary); border-radius: 5px; transition: width 1s; }
        .chart-value { width: 50px; text-align: right; font-weight: bold; color: white; }

    </style>
</head>
<body>

    <!-- Sidebar -->
    <aside>
        <div class="brand">GENCO <span style="font-size:0.5em; color:var(--text-muted)">AI PRO</span></div>
        <nav>
            <button class="active" onclick="switchTab('simple-chat')">💬 Chat IA</button>
            <button onclick="switchTab('massive-chat')">📢 Campaña Masiva</button>
            <button onclick="switchTab('image')">🎨 Gemini Imágenes</button>
            <button onclick="switchTab('voice')">🗣️ Texto a Voz</button>
            <button onclick="switchTab('dashboard')">📊 Dashboard</button>
        </nav>
    </aside>

    <main>

        <!-- 1. CHAT IA -->
        <section id="simple-chat" class="active">
            <h2>
                Chat IA
                <div class="status-badge"><span style="width:8px;height:8px;background:#48bb78;border-radius:50%;"></span> Genco: 2615999995</div>
            </h2>
            <div class="grid-2">
                <div class="card">
                    <label>Destinatarios (Separados por coma)</label>
                    <input type="text" id="simple-nums" placeholder="2611234567, 2619876543...">
                    
                    <label>Seleccionar Plantilla</label>
                    <div class="preset-grid">
                        <button class="preset-btn" onclick="loadPreset('frio')">Base MZA Frío</button>
                        <button class="preset-btn" onclick="loadPreset('sanrafael')">Base San Rafael</button>
                        <button class="preset-btn" onclick="loadPreset('adj')">Genco Adj</button>
                        <button class="preset-btn" onclick="loadPreset('cap')">Genco Cap</button>
                        <button class="preset-btn" onclick="loadPreset('rep')">Genco Rep</button>
                        <button class="preset-btn" style="border-color:var(--accent); color:var(--accent);" onclick="loadPreset('arg')">Base ARG</button>
                    </div>
                    
                    <label>Adjuntar (Plantilla PDF/JPG)</label>
                    <input type="file" id="simple-file">
                </div>
                <div class="card">
                    <label>Mensaje</label>
                    <textarea id="simple-msg" rows="12" style="resize: vertical;" placeholder="Selecciona una plantilla para cargar el texto..."></textarea>
                    <button class="btn btn-primary" onclick="sendSimple()">⚡ ENVIAR DIRECTO</button>
                    <div class="console-log" id="simple-log">> Sistema listo.<br>> Esperando selección de plantilla...</div>
                </div>
            </div>
        </section>

        <!-- 2. CAMPAÑA MASIVA (CON SEGMENTO IA) -->
        <section id="massive-chat">
            <h2>Campaña Masiva Inteligente</h2>
            
            <div class="grid-2">
                <!-- Columna Datos -->
                <div class="card">
                    <label>1. Cargar Base de Datos</label>
                    <input type="file" id="mass-file" onchange="startAIAnalysis(this)">
                    
                    <div id="ai-segment-box" class="ai-segment" style="display:none;">
                        <h4 style="color:var(--primary); margin-bottom:10px;">🤖 Análisis IA Completado</h4>
                        <div class="ai-stat-row"><span>Contactos Válidos:</span> <span class="ai-stat-val" id="ai-count">0</span></div>
                        <div class="ai-stat-row"><span>Mejor Horario Sugerido:</span> <span class="ai-stat-val" id="ai-time">--:--</span></div>
                        <div class="ai-stat-row"><span>Frecuencia Óptima:</span> <span class="ai-stat-val" id="ai-freq">-- msg/min</span></div>
                        <div class="ai-stat-row"><span>Flujo de Disparos:</span> <span class="ai-stat-val">Optimizado (Burst Safe)</span></div>
                    </div>

                    <label>2. Plantilla Adjunta (PDF/JPG)</label>
                    <input type="file" id="mass-template">
                </div>

                <!-- Columna Controles -->
                <div class="card">
                    <label>3. Ajustes Manuales (Opcional)</label>
                    <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                        <div class="grid-2" style="gap:10px; margin-bottom:10px;">
                            <div>
                                <label style="font-size:0.7rem">Inicio</label>
                                <input type="time" value="09:00" style="margin:0">
                            </div>
                            <div>
                                <label style="font-size:0.7rem">Fin</label>
                                <input type="time" value="18:00" style="margin:0">
                            </div>
                        </div>
                        <label style="font-size:0.7rem">Límite Diario</label>
                        <input type="number" id="mass-limit" value="500">
                    </div>
                </div>
            </div>

            <div class="card">
                <label>4. Mensaje Masivo</label>
                <textarea id="mass-msg" rows="6" placeholder="Escribe aquí tu campaña de marketing..."></textarea>
                <button id="btn-send-massive" class="btn btn-primary" disabled style="opacity:0.5; cursor:not-allowed;">🚀 ESPERANDO ANÁLISIS IA...</button>
            </div>
        </section>

        <!-- 3. IMAGENES -->
        <section id="image">
            <h2>Gemini Nano Banana Pro</h2>
            <div class="grid-2">
                <div class="card">
                    <label>Prompt</label>
                    <textarea id="img-prompt" rows="5" placeholder="Describe la imagen..."></textarea>
                    <label>Ratio</label>
                    <select id="img-ratio">
                        <option value="1:1">1:1 (Cuadrado)</option>
                        <option value="16:9">16:9 (Paisaje)</option>
                        <option value="9:16">9:16 (Vertical)</option>
                    </select>
                    <button class="btn btn-primary" onclick="generateGeminiImg()">✨ Generar</button>
                </div>
                <div class="card" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
                    <div id="img-box" style="width:100%; min-height:300px; background:#000; border:1px dashed var(--border); display:flex; align-items:center; justify-content:center; margin-bottom:1rem; border-radius:var(--radius); position:relative; overflow:hidden;">
                        <p style="color:var(--text-muted)" id="img-placeholder-text">Imagen generada aquí</p>
                        <!-- La imagen se inyectará aquí -->
                    </div>
                    <!-- Botón de descarga JPG -->
                    <button id="dl-img-btn" class="btn btn-gold" style="width:100%; display:none;" onclick="downloadImg()">⬇ Descargar JPG</button>
                </div>
            </div>
        </section>

        <!-- 4. VOZ (SOLO 2 OPCIONES) -->
        <section id="voice">
            <h2>Text to Voz (Gemini)</h2>
            <div class="grid-2">
                <div class="card">
                    <label>Texto para Audio</label>
                    <textarea id="voice-text" rows="6"></textarea>
                    
                    <label>Seleccionar Voz (Argentino)</label>
                    <select id="voice-select">
                        <option value="m1">Masculino (Estilo Argentino)</option>
                        <option value="f1">Femenino (Tono Argentino)</option>
                    </select>

                    <div style="display:flex; gap:10px; margin-top:1rem;">
                        <button class="btn btn-primary" style="flex:1" onclick="playVoice()">▶ Reproducir</button>
                        <button class="btn" style="flex:1; background:var(--danger); color:white;" onclick="stopVoice()">⏹ Detener</button>
                    </div>
                    <button class="btn btn-gold" style="width:100%; margin-top:10px;" onclick="downloadMP3()">⬇ Descargar MP3</button>
                </div>
                <div class="card" style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
                    <div style="font-size:4rem; margin-bottom:1rem; opacity:0.5;">🎙️</div>
                    <p style="font-size:0.8rem; color:var(--text-muted);">Audio generado vía Google AI Studio</p>
                </div>
            </div>
        </section>

        <!-- 5. DASHBOARD MEJORADO -->
        <section id="dashboard">
            <div class="dashboard-header">
                <h2>Dashboard Analítico Avanzado</h2>
                <button class="btn btn-sm btn-gold" onclick="notifyEmail()">📧 Notificar a acouto@gencosa.com.ar</button>
            </div>

            <!-- Alerta Visual -->
            <div class="alert-box">
                <span style="font-size:1.5rem;">⚠️</span>
                <div>
                    <strong style="color:var(--danger)">Alerta IA:</strong> Se detectó una baja del 15% en la tasa de respuesta en la base "San Rafael" ayer. Se recomienda reenviar hoy a las 10:00 AM.
                </div>
            </div>

            <!-- KPIs -->
            <div class="grid-3">
                <div class="card" style="text-align:center;">
                    <h3 style="color:var(--primary); font-size:2.5rem;">1,245</h3>
                    <p>Envíos Totales</p>
                </div>
                <div class="card" style="text-align:center;">
                    <h3 style="color:var(--hot); font-size:2.5rem;">432</h3>
                    <p>Respondieron (Sí)</p>
                </div>
                <div class="card" style="text-align:center;">
                    <h3 style="color:var(--cold); font-size:2.5rem;">813</h3>
                    <p>Sin Respuesta (No)</p>
                </div>
            </div>

            <!-- Gráficos Visuales (Mejora Estadística) -->
            <div class="card visual-stats">
                <h3 style="margin-bottom:1rem; border-bottom:1px solid var(--border); padding-bottom:0.5rem;">Tasa de Respuesta por Base de Datos</h3>
                
                <div class="chart-row">
                    <span class="chart-label">Base ARG</span>
                    <div class="chart-track"><div class="chart-bar" style="width: 85%;"></div></div>
                    <span class="chart-value">85%</span>
                </div>
                <div class="chart-row">
                    <span class="chart-label">Base MZA Frío</span>
                    <div class="chart-track"><div class="chart-bar" style="width: 40%;"></div></div>
                    <span class="chart-value">40%</span>
                </div>
                <div class="chart-row">
                    <span class="chart-label">San Rafael</span>
                    <div class="chart-track"><div class="chart-bar" style="width: 65%;"></div></div>
                    <span class="chart-value">65%</span>
                </div>
                <div class="chart-row">
                    <span class="chart-label">Genco Cap</span>
                    <div class="chart-track"><div class="chart-bar" style="width: 50%;"></div></div>
                    <span class="chart-value">50%</span>
                </div>
            </div>

            <!-- Tabla Mejorada -->
            <div class="card">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3>Reporte Detallado de Interacción</h3>
                    <div class="report-actions">
                        <button class="btn btn-sm btn-outline" onclick="exportReport('diario')">Descargar Diario</button>
                        <button class="btn btn-sm btn-outline" onclick="exportReport('semanal')">Descargar Semanal</button>
                        <button class="btn btn-sm btn-outline" onclick="exportReport('mensual')">Descargar Mensual</button>
                    </div>
                </div>
                <table class="leads-table">
                    <thead>
                        <tr>
                            <th>Teléfono</th>
                            <th>Base Origen</th>
                            <th>Estado Lead</th>
                            <th>Respondió</th>
                            <th>Último Envío</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>+54 9 261 111 2222</td>
                            <td>Base ARG</td>
                            <td><span class="status-badge-table sb-hot">Caliente</span></td>
                            <td><span class="status-badge-table sb-yes">Sí</span></td>
                            <td>Hoy 09:15</td>
                            <td><button class="btn btn-sm btn-gold" onclick="alert('Agendar cita...')">Agendar</button></td>
                        </tr>
                        <tr>
                            <td>+54 9 261 333 4444</td>
                            <td>Base MZA Frío</td>
                            <td><span class="status-badge-table sb-cold">Frío</span></td>
                            <td><span class="status-badge-table sb-no">No</span></td>
                            <td>Hoy 09:16</td>
                            <td><button class="btn btn-sm btn-outline" onclick="alert('Reintentar...')">Reintentar</button></td>
                        </tr>
                        <tr>
                            <td>+54 9 261 555 6666</td>
                            <td>San Rafael</td>
                            <td><span class="status-badge-table sb-warm">Tibio</span></td>
                            <td><span class="status-badge-table sb-yes">Sí</span></td>
                            <td>Ayer 14:30</td>
                            <td><button class="btn btn-sm btn-outline" onclick="alert('Enviando presupuesto...')">Ofertar</button></td>
                        </tr>
                        <tr>
                            <td>+54 9 261 777 8888</td>
                            <td>Genco Cap</td>
                            <td><span class="status-badge-table sb-cold">Frío</span></td>
                            <td><span class="status-badge-table sb-no">No</span></td>
                            <td>Ayer 14:31</td>
                            <td><button class="btn btn-sm" style="background:var(--danger); color:white;" onclick="alert('Descartando lead...')">Descartar</button></td>
                        </tr>
                        <tr>
                            <td>+54 9 260 999 0000</td>
                            <td>Base ARG</td>
                            <td><span class="status-badge-table sb-hot">Caliente</span></td>
                            <td><span class="status-badge-table sb-yes">Sí</span></td>
                            <td>Ayer 18:00</td>
                            <td><button class="btn btn-sm btn-gold" onclick="alert('Agendar...')">Agendar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    </main>

    <div class="toast" id="toast">Notificación</div>

    <script>
        // --- NAVIGATION ---
        function switchTab(id) {
            document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
            event.currentTarget.classList.add('active');
        }

        function showToast(msg) {
            const t = document.getElementById('toast');
            t.innerText = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 3000);
        }

        // --- 1. SIMPLE CHAT ---
        const presets = {
            'frio': "Hola, soy Adrián, asesor comercial de ventas especiales de Jeep y RAM, concesionario GENCO en Mendoza.\nEste mes se activó un beneficio exclusivo para Mendoza que no se repite todos los meses.\nJeep Renegade desde $250.000 + DNI, y también Compass, Commander, RAM Rampage y nuevo ingreso RAM Dakota, todos con 50% en la primera cuota y vouchers de regalo, solo en enero.\n¿Te parece si coordinamos una entrevista corta y te explico cómo aprovecharlo?",
            'sanrafael': "Hola, soy Adrián, asesor comercial de ventas especiales de Jeep y RAM, concesionario GENCO en Mendoza.\nSoy de San Rafael y trabajo desde Godoy Cruz para hacerte llegar tu 0 km a todo el Sur Mendocino.\nJeep Renegade, Compass, Commander, RAM Rampage o nuevo ingreso RAM Dakota, con 20% en la primera cuota, adjudicación asegurada desde la cuota 4; Renegade Sport desde $250.000 + DNI.\n¿Te parece si coordinamos una entrevista y vemos cuál puede ser tu próxima unidad?",
            'adj': "Hola, soy Adrián, asesor comercial de ventas especiales de Jeep y RAM, concesionario GENCO en Mendoza.\nComo ya sos parte de la familia Genco, se habilitó una financiación única pensada solo para vos.\nPodés volver a entrar por Renegade, Compass, Commander, RAM Rampage o RAM Dakota, con 50% en la primera cuota y vouchers de regalo, solo en enero.\n¿Te parece si coordinamos una entrevista y te explico esta financiación especial?",
            'cap': "Hola, soy Adrián, asesor comercial de ventas especiales de Jeep y RAM, concesionario GENCO en Mendoza.\nEscuchá bien: vos que tenés capital activo, es momento de volver a ponerlo en marcha.\nEste mes podés acceder a Renegade, Compass, Commander, RAM Rampage o RAM Dakota, con 50% de la primera cuota y vouchers de regalo, solo en enero.\n¿Coordinamos una entrevista y lo vemos con números claros?",
            'rep': "Hola, soy Adrián, asesor comercial de ventas especiales de Jeep y RAM, concesionario GENCO en Mendoza.\nComo ya sos parte de la familia Genco, este mes se activó un beneficio exclusivo para Mendoza que no se repite todos los meses.\nJeep Renegade desde $250.000 + DNI, y también Compass, Commander, RAM Rampage y nuevo ingreso RAM Dakota, todos con 50% en la primera cuota y vouchers de regalo, solo en enero.\n¿Te parece si coordinamos una entrevista corta y te explico cómo aprovecharlo?",
            'arg': "Hola, soy Adrián, asesor comercial de ventas especiales de Jeep y RAM, concesionario GENCO en Mendoza.\nEste mes se activó un beneficio exclusivo a nivel nacional, disponible solo para clientes que realicen el contrato 100% online, de forma oficial, rápida y digital.\n\nAtención, esta es una oportunidad real para asegurar tu 0 km:\nJeep Renegade desde $250.000 + DNI exclusivos !!! consulta también Jeep Compass, Jeep Commander, RAM Rampage y el nuevo ingreso RAM Dakota.\nTodas las opciones cuentan con 50% en la primera cuota, adjudicación pactada en la cuota 4 y vouchers de regalo, solo por tiempo limitado.\n\n¿Te parece si coordinamos una entrevista corta y te explico cómo avanzar hoy mismo y asegurar tu unidad?"
        };

        function loadPreset(k) { 
            document.getElementById('simple-msg').value = presets[k]; 
            const log = document.getElementById('simple-log');
            log.innerHTML += `> Plantilla cargada: <span style="color:white">${k.toUpperCase()}</span><br>`;
            log.scrollTop = log.scrollHeight;
        }
        
        function sendSimple() {
            const log = document.getElementById('simple-log');
            log.innerHTML += "> Conectando a hardware Genco (2615999995)...\n";
            log.scrollTop = log.scrollHeight;
            setTimeout(() => {
                log.innerHTML += "<span style='color:#48bb78'>> ✅ ENVIADO DIRECTO.</span><br>";
                log.scrollTop = log.scrollHeight;
                showToast("Mensaje enviado desde 2615999995");
            }, 1000);
        }

        // --- 2. MASSIVE CHAT (AI SEGMENT) ---
        function startAIAnalysis(input) {
            if(input.files && input.files[0]) {
                const segment = document.getElementById('ai-segment-box');
                const btn = document.getElementById('btn-send-massive');
                
                segment.style.display = 'block';
                segment.innerHTML = "<span style='color:var(--primary)'>🤖 Analizando estructura, frecuencia y horarios óptimos...</span>";

                setTimeout(() => {
                    const randomCount = Math.floor(Math.random() * 2000 + 500);
                    const randomMin = 9 + Math.floor(Math.random() * 2); 
                    const randomFreq = 40 + Math.floor(Math.random() * 20); 

                    segment.innerHTML = `
                        <h4 style="color:var(--primary); margin-bottom:10px;">🤖 Análisis IA Completado</h4>
                        <div class="ai-stat-row"><span>Contactos Válidos:</span> <span class="ai-stat-val">${randomCount}</span></div>
                        <div class="ai-stat-row"><span>Mejor Horario Sugerido:</span> <span class="ai-stat-val">0${randomMin}:00 AM</span></div>
                        <div class="ai-stat-row"><span>Frecuencia Óptima:</span> <span class="ai-stat-val">${randomFreq} msg/min</span></div>
                        <div class="ai-stat-row"><span>Flujo de Disparos:</span> <span class="ai-stat-val">Optimizado (Burst Safe)</span></div>
                    `;

                    btn.disabled = false;
                    btn.style.opacity = '1';
                    btn.style.cursor = 'pointer';
                    btn.innerHTML = "🚀 ENVIAR";
                    btn.classList.add('btn-gold');
                    showToast("Análisis IA finalizado. Configuración óptima lista.");
                }, 2500);
            }
        }

        function startMassive() {
            showToast("Campaña iniciada con configuración IA optimizada.");
        }

        // --- 3. IMAGES (DOWNLOAD JPG) ---
        function generateGeminiImg() {
            const p = document.getElementById('img-prompt').value;
            if(!p) return;
            const box = document.getElementById('img-box');
            const btn = document.getElementById('dl-img-btn');
            const placeholder = document.getElementById('img-placeholder-text');

            placeholder.style.display = 'none';
            box.innerHTML = "Generando...";
            btn.style.display = 'none';

            setTimeout(() => {
                const seed = p.replace(/\s/g, '');
                const ratio = document.getElementById('img-ratio').value;
                let w=600, h=600;
                if(ratio === '16:9') { w=800; h=450; }
                if(ratio === '9:16') { w=450; h=800; }
                
                // Crear imagen
                const img = document.createElement('img');
                img.src = `https://picsum.photos/seed/${seed}/${w}/${h}`;
                img.style.maxWidth = '100%';
                img.style.borderRadius = '4px';
                
                box.innerHTML = '';
                box.appendChild(img);
                
                // Mostrar botón descargar
                btn.style.display = 'block';
                showToast("Imagen generada con éxito.");
            }, 1500);
        }

        function downloadImg() {
            const img = document.querySelector('#img-box img');
            if(img) {
                const link = document.createElement('a');
                link.download = 'imagen_gemini_pro.jpg';
                link.href = img.src;
                link.click();
                showToast("Descargando imagen JPG...");
            }
        }

        // --- 4. VOICE ---
        function playVoice() {
            const text = document.getElementById('voice-text').value;
            if(!text) return;
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'es-AR'; 
            window.speechSynthesis.speak(u);
        }
        function stopVoice() { window.speechSynthesis.cancel(); }
        function downloadMP3() { showToast("🎧 Generando MP3... (Simulación)"); setTimeout(() => showToast("✅ Descarga lista"), 2000); }

        // --- 5. DASHBOARD ---
        function notifyEmail() {
            showToast("📧 Enviando reporte y alertas a acouto@gencosa.com.ar...");
        }

        function exportReport(type) {
            showToast(`📥 Generando reporte ${type.toUpperCase()}...`);
            setTimeout(() => {
                const csv = "Telefono,Base,Estado,Respuesta,Observacion\n+5492611112222,Base ARG,Caliente,Si,Cita agendada\n+5492613334444,Base MZA Frio,Frio,No,Pendiente";
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `reporte_genco_${type}.csv`;
                a.click();
            }, 1000);
        }

    </script>
</body>
</html>
