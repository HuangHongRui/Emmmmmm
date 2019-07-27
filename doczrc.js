export default {
  title: 'Leo-docs',
  typescript: true,
  
  notUseSpecifiers: true,
  filterComponents: files => files.filter(file => /([^d]\.tsx?)$/.test(file)),
};