// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[cfg(target_os = "windows")]
#[tauri::command]
fn system_accent_color() -> Option<String> {
    use windows::UI::ViewManagement::{UISettings, UIColorType};
    let settings = UISettings::new().ok()?;
    let color = settings.GetColorValue(UIColorType::Accent).ok()?;
    let color_rgb = format!("rgba({},{},{},{})", color.R, color.G, color.B, color.A);
    Some(color_rgb)
}

#[tauri::command]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![system_accent_color])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
