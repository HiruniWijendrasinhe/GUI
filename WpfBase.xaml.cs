using System.Text;
using System.Windows;
using WpfAppdashboard;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
  

namespace WpfApp6Base
{
   
    public partial class LoginWindow : Window
    {
        public LoginWindow()
        {
            InitializeComponent();
        }
    
    private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            string email = txtEmail.Text; 
            string password = txtPassword.Password; 

            
            if (email == "lakshikahiruni20@gmail.com" && password == "200155904026")
            {
                MessageBox.Show("Login Successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                

                DashboardWindow dashboard = new DashboardWindow();

                
                dashboard.Show();

                
                this.Close();
            }
            else
            {
                MessageBox.Show("Invalid email or password!", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}
        
    
