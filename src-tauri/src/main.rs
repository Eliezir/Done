// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::Serialize;

#[derive(Serialize)]
struct SystemTheme {
    theme: String,
    accent_color: String,
}

#[cfg(target_os = "windows")]
#[tauri::command]
fn get_system_theme() -> Option<SystemTheme> {
    use windows::UI::ViewManagement::{UISettings, UIColorType};
    
    let settings = UISettings::new().ok()?;
    
    // Get background color to determine theme
    let bg_color = settings.GetColorValue(UIColorType::Background).ok()?;
    let luminance = (0.299 * bg_color.R as f32 + 0.587 * bg_color.G as f32 + 0.114 * bg_color.B as f32) / 255.0;
    let theme = if luminance < 0.5 { "dark".to_string() } else { "light".to_string() };
    
    // Get accent color
    let accent = settings.GetColorValue(UIColorType::Accent).ok()?;
    let accent_color = format!("rgba({},{},{},{})", accent.R, accent.G, accent.B, accent.A);
    
    Some(SystemTheme {
        theme,
        accent_color,
    })
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_system_theme])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
