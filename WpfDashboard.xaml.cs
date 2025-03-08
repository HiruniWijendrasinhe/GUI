using System.Text;
using System.Windows;

using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using NewProject;

namespace WpfAppdashboard
{
    
    public partial class DashboardWindow : Window
    {
        private string selectedWindow = "";
        public DashboardWindow()
        {
            InitializeComponent();
        }
        private void StudyNext_Click(object sender, RoutedEventArgs e)
        {
            selectedWindow = "DataStudy";
            MessageBox.Show("Task selected! Click Continue.", "Selection", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        
        private void PaybillNext_Click(object sender, RoutedEventArgs e)
        {
            selectedWindow = "DataPaybills";
            MessageBox.Show("Settings selected! Click Continue.", "Selection", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        
        private void Work_Click(object sender, RoutedEventArgs e)
        {
            selectedWindow = "DataWork";
            MessageBox.Show("Profile selected! Click Continue.", "Selection", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        private void BtnContinue_Click(object sender, RoutedEventArgs e)
        {
           
            if (string.IsNullOrEmpty(selectedWindow))
            {
                MessageBox.Show("Please select an option first!", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;  
            }

            
            Window? nextWindow = null;

           
            if (selectedWindow == "DataPaybills")
            {
                nextWindow = new DatahomeWindow();  
            }
            else
            {
                MessageBox.Show("Unknown selection", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;  
            }

            
            if (nextWindow != null)
            {
                try
                {
                    nextWindow.Show();  
                    this.Hide();  
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Failed to open window: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }
    }
}

