// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as hoge from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('path-and-line.invoke', function (): void {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const line = vscode.window.activeTextEditor?.selection.start.line;
		const name = vscode.workspace.asRelativePath(vscode.window.activeTextEditor?.document.fileName || "");
		if (line === undefined) {
			return;
		}

		vscode.env.clipboard.writeText(`${name}:${line + 1}`);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
