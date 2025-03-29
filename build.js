const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
    const bookDir = '_book';
    const currentDir = process.cwd();

    // 1. 检查_book目录是否存在
    if (!fs.existsSync(bookDir)) {
        console.log('正在生成_book目录...');
        execSync('gitbook build', { stdio: 'inherit' });
    }

    // 2. 清理当前目录文件（保留_book目录）
    fs.readdirSync(currentDir).forEach(file => {
        if (file !== bookDir && !file.startsWith('.')) {
            const filePath = path.join(currentDir, file);
            fs.rmSync(filePath, { 
                recursive: true, 
                force: true 
            });
        }
    });

    // 3. 移动_book内容到根目录
    const moveContents = (src) => {
        fs.readdirSync(src).forEach(item => {
            const srcPath = path.join(src, item);
            const destPath = path.join(currentDir, item);
            
            if (fs.lstatSync(srcPath).isDirectory()) {
                fs.mkdirSync(destPath, { recursive: true });
                moveContents(srcPath);
            } else {
                fs.renameSync(srcPath, destPath);
            }
        });
    };
    moveContents(bookDir);

    // 4. 删除_book目录
    fs.rmSync(bookDir, { 
        recursive: true, 
        force: true 
    });

    console.log('操作完成！');
} catch (error) {
    console.error('执行出错:', error.message);
    process.exit(1);
}