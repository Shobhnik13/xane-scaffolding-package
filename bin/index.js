#!/usr/bin/env node
// the above line is shebang to tell the system to use node to run this script

const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");

const feature = process.argv[2];

if (!feature) {
    console.error("Please provide a feature name as an argument.");
    process.exit(1)
}

// Format feature name
const featureLower = feature.toLowerCase()
const featurePascal = feature.charAt(0).toUpperCase() + feature.slice(1).toLowerCase()

// get the current working directory and template paht that will be used to generate the stuff 
const projectRoot = process.cwd()
const templateRoot = path.join(__dirname, "../templates/feature")


async function generateFiles(templateDir, targetDir) {
    // first ensure that the target dir exists
    fs.ensureDirSync(targetDir)

    // read all the files and folders in the template dir
    const entries = fs.readdirSync(templateDir, { withFileTypes: true })

    // now we have multiple folders in which there are multiple files that needs to be created
    // looping it
    for (const entry of entries) {
        const srcPath = path.join(templateDir, entry.name);

        const targetName = entry.name
            .replace(/__feature__/g, featureLower)
            .replace(/__Feature__/g, featurePascal);

        const destPath = path.join(targetDir, targetName);


        if (entry.isDirectory()) {
            await generateFiles(srcPath, destPath);
        } else {
            if (fs.existsSync(destPath)) {
                const { overwrite } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "overwrite",
                        message: `${path.relative(projectRoot, destPath)} already exists. Updating it will delete all the pre written code in it. So do you want to overwrite it?`,
                        default: false
                    }
                ]);

                if (!overwrite) continue;
            }

            let content = fs.readFileSync(srcPath, "utf8");

            content = content
                .replace(/__feature__/g, featureLower)
                .replace(/__Feature__/g, featurePascal);

            fs.writeFileSync(destPath, content);
        }
    }
}

async function main() {
    try {
        await generateFiles(templateRoot, projectRoot);
        console.log(`✅ Feature "${featurePascal}" has been generated successfully.`);
    } catch (err) {
        console.error("❌ Failed to generate feature");
        console.error(err.message);
        process.exit(1);
    }
}

main()
