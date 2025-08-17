// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// easy - run
// fn main() {
//     excalidraw_go_lib::run()
// }

use tauri::WindowEvent;

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}