use std::fs;
use std::io::{self, Write};
use std::path::{Path, PathBuf};

fn prompt(message: &str) -> io::Result<String> {
    let mut buffer = String::new();
    print!("{}", message);
    io::stdout().flush()?;
    io::stdin().read_line(&mut buffer)?;
    Ok(buffer.trim().to_string())
}

fn main() -> io::Result<()> {
    let folder_path = PathBuf::from(prompt("Enter the path of the folder with the files to rename: ")?);
    let names_file_path = PathBuf::from(prompt("Enter the path of the text file containing the new names: ")?);
    let new_names = fs::read_to_string(&names_file_path)?
        .lines()
        .map(|name| name.trim())
        .collect::<Vec<_>>();
    let files_in_folder = fs::read_dir(&folder_path)?
        .map(|entry| entry.map(|e| e.path()))
        .collect::<Result<Vec<_>, _>>()?;
    if new_names.len() != files_in_folder.len() {
        println!("Error: The number of new names in the text file does not match the number of files in the folder.");
        return Ok(());
    }
    println!("Preview of renamed files:");
    let conflicts: Vec<(PathBuf, PathBuf)> = files_in_folder
        .iter()
        .enumerate()
        .map(|(i, path)| {
            let filename = path.file_name().unwrap().to_str().unwrap();
            let ext = path.extension().map_or("", |ext| format!(".{}", ext.to_str().unwrap()));
            let new_filename = format!("{:03}_{}{}", i + 1, new_names[i], ext);
            let new_path = path.with_file_name(&new_filename);
            println!("{} -> {}", filename, new_filename);
            (path.to_path_buf(), new_path)
        })
        .filter(|(_, new_path)| new_path.exists())
        .collect();
    if !conflicts.is_empty() {
        println!("Conflicts detected:");
        for (old_path, new_path) in conflicts {
            println!("{} -> {}", old_path.display(), new_path.display());
        }
    }
    let confirmation = prompt("Do you want to proceed with renaming? (y/n): ")?;
    if confirmation.trim().to_lowercase() != "y" {
        return Ok(());
    }
    for (old_path, new_path) in conflicts {
        fs::rename(old_path, new_path)?;
    }
    println!("Files successfully renamed.");
    if cfg!(target_os = "macos") {
        std::process::Command::new("open").arg(&folder_path).output()?;
    }
    Ok(())
}
