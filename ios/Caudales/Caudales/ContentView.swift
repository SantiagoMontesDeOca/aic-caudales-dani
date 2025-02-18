import SwiftUI
import Rios

struct ContentView: View {

    @State var viewModel = RioViewModel()
    
    var body: some View {
        NavigationView{
            ScrollView {
                VStack {
                    RioCardView(viewmodel: viewModel)
                }.padding(.horizontal, 20)
            }
        }
    }
}

#Preview {
    ContentView()
}
